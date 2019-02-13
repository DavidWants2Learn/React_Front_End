import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <div style={{margin: 15}}>  

          {/* <object 
          data="http://www.africau.edu/images/default/sample.pdf" 
          /> */}

          <form 
          style={{paddingTop: 15}}
          
          action="upload.php" method="post" 
          enctype="multipart/form-data">
              
              <h3>Select document to upload: </h3>


              <div style={{marginTop: 5, 
              marginBottom: 5,
              paddingRight: 30
              }}>  
              <input 
              style={{paddingLeft: 10}}
              type="file" name="fileToUpload" 
              id="fileToUpload"/>    
            </div> 
          <div
          style={{margin:10}}>
          
          <input type="submit" value="Submit" 
              name="submit"/>
          </div>


          </form>

        </div>
      );
    }
  }
  
  export default HomePage