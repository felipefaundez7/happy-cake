import { Container } from "react-bootstrap";
import "./Home.css"

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5 titulo">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6 className="subtitulo"> El lugar de los pasteles felices </h6> 
      <h4 className="emoji"> 🎂 </h4> 
    </Container>
  );
};