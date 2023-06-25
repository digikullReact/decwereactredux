import React, { useState } from 'react'
import { Input } from 'antd';
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';
import { addTodo,deleteTodo } from '../slices/counterSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Avatar, List } from 'antd';






const Todo = (prop) => {
  const [input,setInput]=useState("");
  const globalState=useSelector(state=>state.counter);


  const dispatch=useDispatch();
const addTodoHandler=()=>{

  dispatch(addTodo(input));

}

const handleChange=(event)=>{
  setInput(event.target.value);
}
const handleDeleteAction=(index)=>{
 dispatch( deleteTodo(index))
}

  return (
    <div style={{marginTop:"100px"}}>
      <Row>
      <Col span={12}>

      <Input placeholder="Basic usage" onChange={handleChange} />

      <Space wrap>
    <Button type="primary" onClick={addTodoHandler}>Add Todo</Button>
   
  </Space>

      </Col>
      <Col span={12}>

      <List
    itemLayout="horizontal"
    dataSource={globalState.todos}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
        <Button type="primary" onClick={()=>handleDeleteAction(index)}>Delete</Button>
      </List.Item>
    )}
  />



      </Col>
    </Row>
 

    </div>
  )
}

export default Todo