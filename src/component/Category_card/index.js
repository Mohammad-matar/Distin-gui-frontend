import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import { Box, Modal, TextField, Typography } from "@mui/material";
import "./style.css"
import axios from 'axios';
import { useAuth } from '../auth';

export default function CategoryCard({ data, onSubmit, isDashboard }) {
    const auth = useAuth()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState(data.title);

    const [selectedFile, setSelectedFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(data.icon);

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
        setPhotoUrl(URL.createObjectURL(e.target.files[0]));
    };

    const src = () => {
        if (selectedFile) {
            return photoUrl;
        } else {
            return `https://disting-ui-api.onrender.com/uploads/${photoUrl}`;
        };
    }

    //update

    const handleSubmit = () => {
        let error = null;

        const body = new FormData();
        if (title) {
            body.append("title", title);
        } else {
            error = "title is required";
        }
        if (selectedFile) {
            body.append("icon", selectedFile);
        }
        if (error !== null) {
            alert(error);
        } else {
            axios
                .put(`https://disting-ui-api.onrender.com/categories/${data._id}`, body, {
                    headers: {
                        Authorization: auth.authorizationToken(),
                    },
                })
                .then((res) => {
                    alert("Editing Succeeded");
                    onSubmit();
                    console.log(res);
                })
                .catch((err) => {
                    alert("Editing Failed");
                    console.log(err);
                });
        }

    };

    //delete
    const handleDelete = () => {
        axios
            .delete(`https://disting-ui-api.onrender.com/categories/${data._id}`, {
                headers: {
                    Authorization: auth.authorizationToken(),
                },
            })
            .then(res => {
                alert("Deleted Successfully");
                onSubmit();
            })
            .catch(err => console.log(err))
    }

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
    return (
        <>
            <div className='category_card__container'>
                <a href={`#${data._id}`}>
                    <div className='category_card_icon'>
                        <img src={`https://disting-ui-api.onrender.com/uploads/${data.icon}`} alt={"category"} />
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
                                        label="Name"
                                        variant="outlined"
                                        defaultValue={title}
                                        onChange={(e) => setTitle(e.target.value)}
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
        </>
    )
}
