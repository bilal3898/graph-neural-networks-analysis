document.querySelector('.upload-button').addEventListener('click', function() {
  const fileInput = document.getElementById('fileUpload');
  
  // Check if a file has been selected
  if (fileInput.files.length === 0) {
      alert("Please select a file to upload.");
  } else {
      // Get the selected file
      const file = fileInput.files[0];
      
      // Display the file name or do further processing
      alert("File selected: " + file.name);
      
      // You can add your file upload logic here
  }
});

document.querySelector('.run-model-button').addEventListener('click', function() {
  // Display loading indicator
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'block'; // Show loading indicator

  // Simulate model running process
  setTimeout(() => {
      // Hide loading indicator after completion
      loadingIndicator.style.display = 'none';

      // Redirect to results page (assuming results page is results.html)
      window.location.href = 'results.html';
  }, 3000); // Adjust time according to your model's processing time
});

// Assuming you have your graph data ready
const graphData = {
  nodes: [
      { id: 'Node1' },
      { id: 'Node2' },
      // more nodes...
  ],
  links: [
      { source: 'Node1', target: 'Node2' },
      // more links...
  ]
};

// Basic D3.js setup
const svg = d3.select('#networkGraph')
  .append('svg')
  .attr('width', 600)
  .attr('height', 400);

// Create simulation
const simulation = d3.forceSimulation(graphData.nodes)
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(300, 200));

// Draw links
svg.selectAll('line')
  .data(graphData.links)
  .enter().append('line')
  .attr('stroke-width', 1)
  .attr('stroke', '#999');

// Draw nodes
const node = svg.selectAll('circle')
  .data(graphData.nodes)
  .enter().append('circle')
  .attr('r', 5)
  .attr('fill', 'blue')
  .call(d3.drag() // Add drag functionality
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

// Simulation tick
simulation.on('tick', () => {
  svg.selectAll('line')
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

  node.attr('cx', d => d.x)
      .attr('cy', d => d.y);
});

// Drag functions
function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

document.querySelector('.run-model-button').addEventListener('click', function() {
  // Display loading indicator
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'block'; // Show loading indicator

  // Simulate model running process
  setTimeout(() => {
      // Hide loading indicator after completion
      loadingIndicator.style.display = 'none';

      // Redirect to results page (assuming results page is results.html)
      window.location.href = 'results.html';
  }, 3000); // Adjust time according to your model's processing time
});

$(document).ready(function () {
  $('#applyFilters').click(function () {
      // Add logic to apply filters to the graph
      alert("Filters applied!");
  });

  $('#sortButton').click(function () {
      // Add logic to sort the graph based on the selected criteria
      alert("Graph sorted!");
  });

  $('#downloadGraph').click(function () {
      // Add logic to download the graph
      alert("Graph downloaded!");
  });

  $('#downloadData').click(function () {
      // Add logic to download the data
      alert("Data downloaded!");
  });

  $('#downloadAnalysis').click(function () {
      // Add logic to download the analysis results
      alert("Analysis results downloaded!");
  });

  $('#rerunModel').click(function () {
      // Redirect to model selection page
      alert("Redirecting to model selection page...");
  });

  $('#changeParameters').click(function () {
      // Redirect to change parameters section
      alert("Redirecting to change parameters...");
  });
});

<script src="https://d3js.org/d3.v7.min.js"></script>

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

const zoomHandler = d3.zoom()
    .on("zoom", (event) => {
        svg.attr("transform", event.transform);
    });

svg.call(zoomHandler);

document.getElementById('nodeType').addEventListener('change', function() {
  const selectedType = this.value;
  node.style('opacity', function(d) {
      return d.type === selectedType || selectedType === 'all' ? 1 : 0.2;
  });
});

function downloadPNG() {
  const svgData = document.querySelector('svg').outerHTML;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const image = new Image();
  image.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  image.onload = function() {
      context.drawImage(image, 0, 0);
      const png = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = png;
      downloadLink.download = 'network-graph.png';
      downloadLink.click();
  };
}

function downloadPNG() {
  const svgData = document.querySelector('svg').outerHTML;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const image = new Image();
  image.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  image.onload = function() {
      context.drawImage(image, 0, 0);
      const png = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = png;
      downloadLink.download = 'network-graph.png';
      downloadLink.click();
  };
}

document.getElementById('reRunModel').addEventListener('click', function() {
  window.location.href = 'model_selection_page.html';
});

// Updated nodes and links data with 'type' field for filtering
const nodes = [
  { id: 'Node 1', type: 'type1' },
  { id: 'Node 2', type: 'type2' },
  { id: 'Node 3', type: 'type1' },
  { id: 'Node 4', type: 'type2' }
];

const links = [
  { source: 'Node 1', target: 'Node 2' },
  { source: 'Node 2', target: 'Node 3' },
  { source: 'Node 3', target: 'Node 4' },
  { source: 'Node 4', target: 'Node 1' }
];

// Update the graph rendering function to apply filtering
function updateGraph(selectedType) {
  const filteredNodes = selectedType === 'all' ? nodes : nodes.filter(node => node.type === selectedType);
  const filteredLinks = links.filter(link => 
      filteredNodes.some(node => node.id === link.source.id) && 
      filteredNodes.some(node => node.id === link.target.id)
  );

  svg.selectAll('*').remove(); // Clear existing graph

  const simulation = d3.forceSimulation(filteredNodes)
      .force("link", d3.forceLink(filteredLinks).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

  const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(filteredLinks)
      .enter().append("line");

  const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(filteredNodes)
      .enter().append("circle")
      .attr("r", 5)
      .attr("fill", "blue")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  simulation
      .nodes(filteredNodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(filteredLinks);

  function ticked() {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
  }
}

// Dropdown change event listener
document.getElementById('nodeType').addEventListener('change', function() {
  const selectedType = this.value;
  updateGraph(selectedType);
});

// Initialize the graph with all nodes
updateGraph('all');

// Zoom functionality added to SVG
const zoom = d3.zoom()
    .scaleExtent([0.1, 10]) // Zoom range from 0.1x to 10x
    .on('zoom', zoomed);

svg.call(zoom);

function zoomed(event) {
    svg.selectAll('g').attr('transform', event.transform);
}

<div>
<label for="sortOptions">Sort by:</label>
<select id="sortOptions">
<option value="id">ID</option>
<option value="degree">Degree</option>
</select>
</div>

document.getElementById('sortOptions').addEventListener('change', function() {
  const sortBy = this.value;

  if (sortBy === 'id') {
      nodes.sort((a, b) => a.id.localeCompare(b.id));
  } else if (sortBy === 'degree') {
      nodes.sort((a, b) => getDegree(b) - getDegree(a));
  }

  updateGraph(document.getElementById('nodeType').value); // Redraw graph with sorted nodes
});

function getDegree(node) {
  return links.filter(link => link.source.id === node.id || link.target.id === node.id).length;
}

function downloadPNG() {
  const svgData = document.querySelector('svg').outerHTML;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const image = new Image();
  image.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  image.onload = function() {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(image, 0, 0);
      const png = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = png;
      downloadLink.download = 'network-graph.png';
      downloadLink.click();
  };
}

document.getElementById('reRunModel').addEventListener('click', function() {
  window.location.href = 'model_selection.html'; // Adjust this link to your model selection page
});

// Placeholder for network graph visualization (using D3.js, Cytoscape.js, or Chart.js)
document.addEventListener('DOMContentLoaded', function () {
  // Handle filter and sort changes
  const nodeFilter = document.getElementById('node-filter');
  const sortNodes = document.getElementById('sort-nodes');

  nodeFilter.addEventListener('change', function () {
      const filterValue = nodeFilter.value;
      console.log(`Filtering nodes by: ${filterValue}`);
      // Apply filtering logic here
  });

  sortNodes.addEventListener('change', function () {
      const sortValue = sortNodes.value;
      console.log(`Sorting nodes by: ${sortValue}`);
      // Apply sorting logic here
  });

  // Handle download graph button click
  const downloadGraphBtn = document.getElementById('download-graph');
  downloadGraphBtn.addEventListener('click', function () {
      // Logic to download the graph as PNG
      console.log("Downloading network graph as PNG...");
  });

  // Handle download data button click
  const downloadDataBtn = document.getElementById('download-data');
  downloadDataBtn.addEventListener('click', function () {
      // Logic to download data as CSV
      console.log("Downloading network data as CSV...");
  });

  // Handle re-run model button click
  const reRunModelBtn = document.getElementById('re-run-model');
  reRunModelBtn.addEventListener('click', function () {
      console.log("Re-running model...");
      // Redirect or re-run logic
  });

  // Handle change parameters button click
  const changeParamsBtn = document.getElementById('change-parameters');
  changeParamsBtn.addEventListener('click', function () {
      console.log("Redirecting to change model parameters...");
      // Redirect to model selection page
      window.location.href = 'model-selection.html';
  });
});