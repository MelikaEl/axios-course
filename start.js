// GET REQUEST
function getTodos() {
 
  // axios({
  //   method:'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params:{
  //     _limit:5
  //   }
  // })
  // .then(res=>showOutput(res))
  // .catch(err=>console.log.error(err))

 axios.get('https://jsonplaceholder.typicode.com/todos',{
  params:{_limit:5}
 })
 .then(res=>showOutput(res))
 .catch(err=>console.error(err))
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {// The function showOutput takes a single parameter res, which is expected to be an object containing information about a response.
 //The function updates the inner HTML of an element with the ID res.
 //${res.status}: This section creates a Bootstrap card with a header that displays the status of the response. The res.status value is interpolated into the HTML string.
 //${JSON.stringify(res.headers, null, 2)}: This section creates another Bootstrap card with the header "Headers". The headers of the response, stored in res.headers, are converted to a JSON string with JSON.stringify and displayed in a <pre> block for better readability.
 //${JSON.stringify(res.data, null, 2)}: This section creates a card with the header "Data". The data of the response, stored in res.data, is also converted to a JSON string and displayed in a <pre> block.
 //${JSON.stringify(res.config, null, 2)}: This section creates a card with the header "Config". The configuration of the response, stored in res.config, is similarly converted to a JSON string and displayed.
 document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}//The showOutput function takes a response object (res) and updates the HTML content of an element with the ID res to display the status, headers, data, and configuration of the response. It uses Bootstrap's card components for layout and JSON stringification for readability. If you'd like a visual representation of a response, you can toggle on image generation mode in the settings panel.

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
