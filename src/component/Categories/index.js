import { useState } from 'react';
import CategoryCard from '../Category_card'
import { Box, Modal, TextField, Typography } from "@mui/material";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import placeholder from '../../images/placeholder.webp'
import "./style.css"
import axios from 'axios';
import { useAuth } from '../auth';

export default function Categories({ data, onSubmit, isDashboard = false }) {

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
        };
    }

    const [title, setTitle] = useState("");
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
        } else {
            error = "icon is required";
        }

        if (error !== null) {
            alert(error);
        } else {
            axios
                .post(`https://disting-ui-api.onrender.com/categories`, body, {
                    headers: {
                        Authorization: auth.authorizationToken(),
                    },
                })
                .then((res) => {
                    setTitle("");
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
        <>
            <div className='categories_container__sx'>
                {data.map((category) => {
                    return <CategoryCard key={category._id} data={category} onSubmit={onSubmit} isDashboard={isDashboard} />
                })}
                {isDashboard && <button className='categories_modal_add' onClick={handleOpen}> <AiOutlinePlusCircle /></button>}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Add Category
                    </Typography>
                    <div className='modal_container'>
                        <div className='modal_categories'>
                            <img src={src()} alt={"item"} onClick={handleOpen} />
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
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Box>
                        </div>
                    </div>
                    <div className='modal_categories_btn'>
                        <button className='categories_modal_submit' onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
