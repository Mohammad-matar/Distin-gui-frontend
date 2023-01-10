import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Box, Modal, TextField, Typography } from "@mui/material";
import placeholder from "../../images/placeholder.webp"
import Item from "../Item"

import "./style.css"
import axios from 'axios';
import { useAuth } from '../auth';

export default function Items({ data, onSubmit, isDashboard, category_id }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const auth = useAuth();
    
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
            return placeholder;
        }
    };
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = () => {
        let error = null;

        let body = new FormData();
        body.append("category_id", category_id)
        if (title) {
            body.append("title", title);
        } else {
            error = "title is required";
        }
        if (description) {
            body.append("description", description);
        }
        if (price) {
            body.append("price", price);
        }

        if (selectedFile) {
            body.append("img", selectedFile);
        }

        if (error !== null) {
            alert(error);
        } else {
            axios
                .post(`https://disting-ui-api.onrender.com/items`, body, {
                    headers: {
                        Authorization: auth.authorizationToken(),
                    },
                })
                .then((res) => {
                    setTitle("");
                    setDescription("");
                    setPrice("");
                    setSelectedFile(null)
                    setPhotoUrl("")
                    onSubmit();
                    handleClose();
                    alert("Category added successfully");
                })
                .catch((err) => console.log(err));
        }
    }

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
                        Add Item
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
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Description"
                                    variant="outlined"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Price"
                                    variant="outlined"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Box>
                        </div>
                    </div>
                    <div>
                        <button className='categories_modal_submit' onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
