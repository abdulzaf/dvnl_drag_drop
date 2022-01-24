
initGUI()

function initGUI() {
    const gui = new dat.GUI({
        autoPlace: false,
        width: '100%'
    });
    $('#guipanel').append($(gui.domElement));

    const blockParams = gui.addFolder('Trial Parameters');
    const targetParams = gui.addFolder('Target Parameters');

    // Options to be added to the GUI
    const block_options = {
        Trials: 15
    };
    blockParams.add(block_options, 'Trials', 0, 100).onChange( function() {
    });

    const target_options = {
        RandomColors: true,
        RandomSymbols: true,
        RandomPositions: true,
    };
    targetParams.add(target_options, 'RandomColors').onChange(function (value) {
        });
    targetParams.add(target_options, 'RandomSymbols').onChange(function (value) {
        });
    targetParams.add(target_options, 'RandomPositions').onChange(function (value) {
        });


    // DISABLE SIM
    gui.close();
}