import React, { useState } from 'react'
import axios from 'axios';
import { Box, Modal, TextField, Typography } from "@mui/material";
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import "./style.css"

export default function CategoryCard({ data, onSubmit, isDashboard }) {
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

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8080/categories/${data._id}`)
            .then(res => {
                alert("Deleted Successfully");
                onSubmit();
            })
            .catch(err => console.log(err))

    }
    return (
        <>
            <div className='category_card__container'>
                <a href={`#${data._id}`}>
                    <div className='category_card_icon'>
                        <img src={`http://localhost:8080/uploads/${data.icon}`} alt={"category"} />
                        <p>
                            {data.title}
                        </p>
                    </div>
                </a>
                {isDashboard &&
                    <div className='category_edit_delete_btn'>
                        <button className='category_edit_btn' onClick={handleOpen}><AiFillEdit /></button>
                        <button className='category_delete_btn' onClick={handleDelete}> <RiDeleteBinLine /></button>
                    </div>
                }
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
                        <div>
                            <div >
                                <img src="" alt={"item"} />
                                {/* upload image */}
                                <input
                                    type="file"
                                    id="image"
                                    hidden
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
                                        label="Name"
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
        </>
    )
}
