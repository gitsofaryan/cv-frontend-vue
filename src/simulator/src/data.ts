import { fullView } from './ux'
import { createSubCircuitPrompt } from './subcircuit'
import save from './data/save'
import load from './data/load'
import createSaveAsImgPrompt from './data/saveImage'
import {
    clearProject,
    newProject,
    saveOffline,
    openOffline,
    recoverProject,
} from './data/project'
import { createNewCircuitScope } from './circuit'
import { createCombinationalAnalysisPrompt } from './combinationalAnalysis'
import { colorThemes } from './themer/themer'
import { showTourGuide } from './tutorials'
import { createVerilogCircuit } from './Verilog2CV'
import { generateVerilog } from './verilog'
import { bitConverterDialog } from './utils'
import { keyBinder } from '#/components/DialogBox/CustomShortcut.vue'
import { ExportProject } from '#/components/DialogBox/ExportProject.vue'
import { ImportProject } from '#/components/DialogBox/ImportProject.vue'

export interface LogixFunction {
    save: () => void;
    load: (data: JSON) => void;
    createSaveAsImgPrompt: () => void;
    clearProject: () => void;
    newProject: (verify: boolean) => Promise<void>;
    saveOffline: () => void;
    createOpenLocalPrompt: () => void;
    recoverProject: () => void;
    createSubCircuitPrompt: () => void;
    createCombinationalAnalysisPrompt: () => void;
    fullViewOption: () => void;
    colorThemes: () => void;
    showTourGuide: () => void;
    newVerilogModule: () => void;
    generateVerilog: () => void;
    bitConverter: () => void;
    createNewCircuitScope: () => void;
    customShortcut: () => void;
    ExportProject: () => void;
    ImportProject: () => void;
}




const logixFunction: LogixFunction = {
    save,
    load,
    createSaveAsImgPrompt,
    clearProject,
    newProject,
    saveOffline,
    createOpenLocalPrompt: openOffline,
    recoverProject,
    createSubCircuitPrompt,
    createCombinationalAnalysisPrompt,
    fullViewOption: fullView,
    colorThemes,
    showTourGuide: showTourGuideHelper,
    newVerilogModule: createVerilogCircuit,
    generateVerilog,
    bitConverter: bitConverterDialog,
    createNewCircuitScope: createNewCircuit,
    customShortcut: keyBinder,
    ExportProject,
    ImportProject,
}

export default logixFunction;






// Hack to restart tour guide
function showTourGuideHelper(): void {
    setTimeout(() => {
        showTourGuide()
    }, 100)
}

// Hack to call createNewCircuitScope with keyboard shortcut
function createNewCircuit(): void {
    createNewCircuitScope()
}
