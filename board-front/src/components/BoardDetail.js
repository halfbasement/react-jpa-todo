import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { boardDelete, boardDetail, boardUpdate } from '../api/boardApi';
import { Form, Button } from 'react-bootstrap';
import { Background, ModalForm } from '../common/styled-modal';







function BoardDetail() {

    useEffect(() => {
        boardDetail(id).then(res => setDetail(res))
    }, [])

    // const id = match.params.id;

    const history = useHistory();

    const { id } = useParams();

    const [detail, setDetail] = useState([])
    const [updateModal, setUpdateModal] = useState(false);


    const [inputs, setInputs] = useState({
        title: '',
        content: '',
    })

    const { title, content } = inputs;


    const onChange = (e) => {

        const { name, value } = e.target

        const nextInputs = {
            ...inputs,
            [name]: value,
        }
        setInputs(nextInputs)

    }

    const updateModalOn = () => {
        setUpdateModal(true);

        const prevInput = {
            ...inputs,
            title: detail.title,
            content: detail.content,
        }
        setInputs(prevInput)

    }

    const updateBoard = async () => {
        if (inputs.title == '') {
            alert("제목을 입력하세요");
        } else {
            await boardUpdate(detail.id, inputs).then(res => alert(`${res}번 글 수정 완료!`))
            window.location.replace('/');
        }
    }

    const deleteBoard = async () => {
        await boardDelete(detail.id).then(res => alert(`${res}번 글 삭제 완료!`))
        window.location.replace('/')

    }


    return (
        <>
            <Card style={{ width: "50%", marginLeft: "500px" }}>
                <Card.Header as="h5" >{detail.title}</Card.Header>
                <Card.Body>
                    <Card.Title >{detail.author}</Card.Title>
                    <Card.Text >
                        <textarea style={{ width: "100%", height: "500px" }} value={detail.content}></textarea>
                    </Card.Text>
                    <div style={{ float: "left" }}>

                        <Button variant="primary" onClick={updateModalOn} >수정</Button>
                        <Button variant="danger" onClick={deleteBoard}>삭제</Button>
                    </div>
                    <Button variant="success" style={{float:'right'}} onClick={()=>{history.push('/')}}>목록으로</Button>
                </Card.Body>
            </Card>

            {
                updateModal &&
                <Background>
                    <ModalForm>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>제목</Form.Label>
                                <Form.Control type="text" name="title" value={inputs.title} onChange={onChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>작성자</Form.Label>
                                <Form.Control type="text" value={detail.author} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                <Form.Label>글 내용</Form.Label>
                                <Form.Control as="textarea" rows={3} name="content" value={inputs.content} onChange={onChange} />
                            </Form.Group>
                            <Button type="button" variant="success" onClick={updateBoard}  >수정</Button>
                            <Button type="button" variant="danger" onClick={() => { setUpdateModal(false) }}>닫기</Button>
                        </Form>
                    </ModalForm>
                </Background>

            }
        </>
    );
};

export default BoardDetail;