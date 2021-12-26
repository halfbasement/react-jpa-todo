import React, { useEffect, useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { boarCreate, boardList } from '../api/boardApi';
import { Background, Modal, ModalForm } from '../common/styled-modal';
function BoardList() {

    const history = useHistory();

    const [board, setBoard] = useState([]);

    const [formModal, setFormModal] = useState(false);
    const [inputs, setInputs] = useState({
        title: '',
        author: '',
        content: '',
    })

    const { title, author, content } = inputs;

    const createBoard = async() => {
        if (inputs.title === '') {
            alert('제목을 입력하세요.')
        } else if (inputs.author === '') {
            alert('작성자를 입력하세요.')
        } else {
           await boarCreate(inputs).then(res=>alert(`${res}번 글 저장 성공`))
            setFormModal(false)
            window.location.replace('/')
        }

    }

    const createModalClose = () =>{
        setFormModal(false)
        setInputs({title:'',content:'',author:''})
    }

    const onChange = (e) => {

        const { name, value } = e.target

        const nextInputs = {
            ...inputs,
            [name]: value,
        }
        setInputs(nextInputs)

    }




    useEffect(() => {
        boardList().then(res => setBoard(res))
    }, [])



    const onClick = (id) => {
        history.push(`/board/${id}`)
    }
    return (

        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>

                <tbody>
                    {board.map(list => (
                        <tr onClick={() => { onClick(list.id) }} key={list.id} >
                            <td>{list.id}</td>
                            <td>{list.title}</td>
                            <td>{list.author}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" onClick={() => { setFormModal(true) }}>글 쓰기</Button>


            {formModal &&
            <Background>
                <ModalForm>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>제목</Form.Label>
                        <Form.Control type="text" placeholder="글 제목을 입력해주세요." name="title" onChange={onChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>작성자</Form.Label>
                        <Form.Control type="text" placeholder="작성자 입력" name="author" onChange={onChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>글 내용</Form.Label>
                        <Form.Control as="textarea" rows={3} name="content" onChange={onChange} />
                    </Form.Group>
                    <Button type="button" variant="success" onClick={createBoard}>작성</Button>
                    <Button type="button" variant="danger" onClick={createModalClose}>닫기</Button>
                </Form>
                </ModalForm>
                </Background>
            }
        </>
    );
};

export default BoardList;