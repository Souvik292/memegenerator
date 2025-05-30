
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';
function Header1(){
    return(
    <section className='relative pt-5'>
      <section className='fixed top-0 right-0 left-0'>
           <Navbar  bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/" className='text-6xl italic font-bold font-serif'>Meme Blast</Navbar.Brand>
            
            <Nav>
         <Navbar.Brand href="/memegenerator" className='text-xl font-bold'>Meme Generator</Navbar.Brand>
         {/* <Navbar.Brand href="/signup" className='text-xl font-bold'></Navbar.Brand> */}
            </Nav>

          </Container> 
        </Navbar>

      </section>
         

    </section>
      
    );
};

export default Header1;





