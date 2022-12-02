import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Item from "../Item"
import { Box, Modal, TextField, Typography } from "@mui/material";

import "./style.css"

export default function Items({ data, onSubmit, isDashboard }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        border: "1px solid #fff",
        boxShadow: 24,
        p: 4,
    };
    const [selectedFile, setSelectedFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState("");
    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
        setPhotoUrl(URL.createObjectURL(e.target.files[0]));
    };
    const src = () => {
        if (selectedFile) {
            return photoUrl;
        } else {
            return `https://matar-api.onrender.com/uploads/`;
        }
    };
    return (
        <div className='Item-Background'>
            {data.map((item) => {
                return (
                    <Item key={item._id} data={item} onSubmit={onSubmit} isDashboard={isDashboard} />
                )
            })}
            {isDashboard && <button onClick={handleOpen} className="categories_modal_add"><AiOutlinePlusCircle /></button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Edit Category
                    </Typography>
                    <div className='modal_container'>
                        <div className='modal_categories'>
                            <img src={src()} alt={"items"} />
                            {/* upload image */}
                            <input
                                type="file"
                                id="image"
                                hidden
                                onChange={handleFileSelect}
                            />
                            <label for="image">
                                Upload
                            </label>
                        </div>

                        <div>
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "40ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Title"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Description"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Price"
                                    variant="outlined"
                                />
                            </Box>
                        </div>
                    </div>
                    <div>
                        <button className='categories_modal_submit'>
                            Submit
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
