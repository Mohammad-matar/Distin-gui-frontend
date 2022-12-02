import axios from "axios"
import placeholder from "../../images/placeholder.webp"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import { Box, Modal, TextField, Typography } from "@mui/material";


import "./style.css"
import { useState } from "react";

export default function Item({ data, onSubmit, isDashboard }) {
    const handleEdit = () => {

    }
    const handleDelete = () => {
        axios
            .delete(`http://localhost:8080/items/${data._id}`)
            .then(res => {
                alert("Deleted Successfully");
                onSubmit();
            })
            .catch(err => console.log(err))
    }
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

    return (<>
        <div className='item__card_container'>
            <div className='item-card-imt'>
                <img src={data.img ? `http://localhost:8080/uploads/${data.img}` : placeholder} alt={"item"} />
                <h2>{data.title}<br /></h2>
                <p>{data.description && data.description}</p>

                <div className='item__description-price'>
                    <p>
                        {data.price && data.price} L.L.
                    </p>
                </div>
                {isDashboard && (
                    <div className='category_edit_delete_btn'>
                        <button type="button" className='category_edit_btn' onClick={handleEdit}><AiFillEdit /></button>
                        <button type="button" className='category_delete_btn' onClick={handleDelete}><RiDeleteBinLine /></button>
                    </div>
                )}
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
        </div>
    </>
    )
}
