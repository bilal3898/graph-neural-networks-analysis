document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initialize Cytoscape.js Graph
const cy = cytoscape({
    container: document.getElementById('networkGraph'),
    elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'ab', source: 'a', target: 'b' } }
    ],
    style: [
        {
            selector: 'node',
            style: {
                'background-color': '#007bff',
                'label': 'data(id)'
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle'
            }
        }
    ],
    layout: {
        name: 'grid',
        rows: 1
    }
});

// Filtering and Sorting Logic
document.getElementById('node-filter').addEventListener('change', function () {
    const filterValue = this.value;
    cy.nodes().forEach(node => {
        if (filterValue === 'all' || node.data('type') === filterValue) {
            node.style('display', 'element');
        } else {
            node.style('display', 'none');
        }
    });
});

// Download Graph as PNG
document.getElementById('download-graph').addEventListener('click', function () {
    const png = cy.png();
    const link = document.createElement('a');
    link.href = png;
    link.download = 'graph.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});