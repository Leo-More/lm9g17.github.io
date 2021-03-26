var pie = new d3pie("myPie", {
    header: {
    title: {
    text: "A very simple example pie"
    }
    },
    data: {
    content: [
    { label: "JavaScript", value: 50 },
    { label: "Ruby", value: 20 },
    { label: "Java", value: 30},
    ]
    },
    //Here further operations/animations can be added like click event, cut out the clicked pie section.
    callbacks: {
    onMouseoverSegment: function(info) {
    console.log("mouse in", info);
    },
    onMouseoutSegment: function(info) {
    console.log("mouseout:", info);
    }
    }
    
    });