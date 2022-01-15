const guide_m = introJs()
guide_m.setOptions({
    TooltipClass:'customtooltip',
    showProgress: true,
    showBullets: false,
    steps: [{
            intro: "Welcome to Tableau report! Here all the visualization report of any field will be found.Check it out!"
        },
        {
            element: document.querySelector('#item1'),
            intro: "production house"
            
        
        },
        {
            element: document.querySelector('#item2'),
            intro: "HR department"
        },
        {
            element: document.querySelector('#item3'),
            intro: "planning department"
        },
        {
            element: document.querySelector('#item4'),
            intro: "This is account"
        },
        {
            element: document.querySelector('#item5'),
            intro: "Sales"
        },
        {
            element: document.querySelector('#tem6'),
            intro: "costing"
        },
        {
            element: document.querySelector('h4'),
            intro: "End of the Report!"
        }
    ]
});
document.querySelector('#guideme').addEventListener('click', function() {
    guide_m.start();
    guide_m.onbeforeexit(function () {
    return confirm("are you sure?");
    })
})
