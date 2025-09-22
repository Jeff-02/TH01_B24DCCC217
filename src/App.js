import React, { useState } from "react";
import "./styles.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Bài 1:</h2>
      <h4>To-do List</h4>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Thêm</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ColorBox = ({ color }) => (
  <div
    style={{
      width: "50px",
      height: "50px",
      backgroundColor: color,
      marginTop: "20px",
    }}
  ></div>
);

const ColorPicker = () => {
  const [color, setColor] = useState("");

  return (
    <div>
      <h2>Bài 2:</h2>
      <h4>Bộ chọn màu</h4>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>
      <ColorBox color={color} />
    </div>
  );
};

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  return (
    <div>
      <h2>Bài 3:</h2>
      <h3>Giỏ hàng</h3>
      <p>Sản phẩm</p>
      {products.map((product, index) => (
        <div key={index}>
          <span>
            {product.name} - {product.price}₫
          </span>
          <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
        </div>
      ))}
      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}₫
          </li>
        ))}
      </ul>
      <h3>Tổng tiền: {totalPrice}₫</h3>
    </div>
  );
};

const Post = ({ title }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
    </div>
  );
};

const Quiz = () => {
  const questions = [
    {
      question: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      answer: "Web UI",
    },
    {
      question: "Props trong React là gì?",
      options: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
      answer: "Ngôn ngữ đánh dấu",
    },
    {
      question: "State dùng để?",
      options: [
        "Quản lý dữ liệu thay đổi",
        "Định nghĩa component",
        "Kết nối backend",
        "Trang trí giao diện",
      ],
      answer: "Trang trí giao diện",
    },
  ];

  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);

    if (answer === questions[questionIndex].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <h2>Bài 5:</h2>
      <h4>Quiz App</h4>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {question.options.map((option, i) => (
            <button key={i} onClick={() => handleAnswer(index, option)}>
              {option}
            </button>
          ))}
        </div>
      ))}
      <h3>Số câu đúng: {score}</h3>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Bài thực hành số 01</h1>

      <TodoList />

      <ColorPicker />

      <Cart />

      <h2>Bài 4:</h2>
      <Post title="Học ReactJS có khó không?" />
      <Post title="Props và State là gì?" />
      <Post title="Lập trình web có vui không?" />

      <Quiz />
    </div>
  );
}
