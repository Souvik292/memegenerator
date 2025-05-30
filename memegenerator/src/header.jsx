
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';
function Header(){
    return(
    <section className='relative pt-5'>
      <section className='fixed top-0 right-0 left-0'>
           <Navbar  bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/" className='text-6xl italic font-bold font-serif'>Meme Blast</Navbar.Brand>
            
            <Nav>
         <Navbar.Brand href="/signin" className='text-xl font-bold'>Signin</Navbar.Brand>
         <Navbar.Brand href="/signup" className='text-xl font-bold'>Signup</Navbar.Brand>
            </Nav>
          </Container>
        </Navbar>

      </section>
         

    </section>
      
    );
};

export default Header;





