import axios from "axios"
import placeholder from "../../images/placeholder.webp"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import { Box, Modal, TextField, Typography } from "@mui/material";

import "./style.css"
import { useState } from "react";

export default function Item({ data, onSubmit, isDashboard }) {

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
    const [photoUrl, setPhotoUrl] = useState(data.img);
    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
        setPhotoUrl(URL.createObjectURL(e.target.files[0]));
    };
    const src = () => {
        if (selectedFile) {
            return photoUrl;
        } else {
            return `http://localhost:8080/uploads/${photoUrl}`;
        }
    };
    //update
    const [title, setTitle] = useState(data.title)
    const [description, setDescription] = useState(data.description)
    const [price, setPrice] = useState(data.price)

    const handleSubmit = () => {
        let error = null;

        let body = new FormData();
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
            console.log(body)
            axios
                .put(`http://localhost:8080/items/${data._id}`, body)
                .then((res) => {
                    alert("Editing Succeeded");
                    onSubmit();
                    handleClose();
                    console.log(res);
                })
                .catch((err) => {
                    alert("Editing Failed");
                    console.log(err);
                });
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
                        <button type="button" className='category_edit_btn' onClick={handleOpen}><AiFillEdit /></button>
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
                            Edit Item
                        </Typography>
                        <div className='modal_container'>
                            <div className='modal_categories'>
                                <img src={src()} alt={"item"} />
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
                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        variant="outlined"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}

                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Price"
                                        variant="outlined"
                                        value={price}
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
        </div>
    </>
    )
}
