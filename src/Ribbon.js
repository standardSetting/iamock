import { useState } from 'react'
import AddAnItem from './RibbonViews/AddAnItem'
import AddAStimulus from './RibbonViews/AddAStimulus'
import AssignScoring from './RibbonViews/AssignScoring'
import Home from './RibbonViews/Home'
import ItemSettigns from './RibbonViews/ItemSettings'
import PreviewDelivery from './RibbonViews/PreviewInDelivery'
import StimulusSettings from './RibbonViews/StimulusSettings'

const RIBBON_ELEMENT_WIDTH = '100px'
const RIBBON_ELEMENT_HEIGHT = '55px'
const RIBBON_TAB_WIDTH = '130px'
const RIBBON_TAB_HEIGHT = '25px'


function RibbonElements(props){
    const label = props.label
    const setView = props.setView

    function setViewToThisView(){
        setView(label)
    }
    
    return (
        <div className='ma2 ba b--purple pointer grow' style={{width: RIBBON_ELEMENT_WIDTH, height: RIBBON_ELEMENT_HEIGHT}} onClick={setViewToThisView}>
        <div className='ma1 f6 pointer dark-gray'>{label}</div>
    </div>
    )
}

function RibbonTabs(props) {
    const tabText = props.tabText
    const ribbonDisplayBool = props.ribbonDisplayBool
    const setRibbonDisplayBool = props.setRibbonDisplayBool

    var select = false

    function setThisTab(e) {
        let ribbonDisplayBoolTemp = {
            'Home':false,
            'Views':false,
            'Add a Stimulus':false,
            'Add an item':false,
            'Stimulus settings':false,
            'Item settings':false,
            'Assign scoring':false,
            'Preview in Delivery':false
        }
        ribbonDisplayBoolTemp[e.target.innerText] = true
        setRibbonDisplayBool(ribbonDisplayBoolTemp)
    }   

    return (
        <>
            {ribbonDisplayBool[tabText] && 
            <div>
                <div className='f6 flex items-center justify-center purple dim pointer ml3 mr3 b' onClick={setThisTab} style={{height: RIBBON_TAB_HEIGHT}}>
                    {tabText}
                </div>
            </div>
            }
            {!ribbonDisplayBool[tabText] && <div className='f6 flex items-center justify-center purple dim pointer ml3 mr3' onClick={setThisTab} style={{height: RIBBON_TAB_HEIGHT}}>
                {tabText}
            </div>}
        </>
    )
}


function Ribbon(props){
    const setView = props.setView
    const [ribbonDisplayBool, setRibbonDisplayBool] = useState({
                                'Home':true,
                                'Views':false,
                                'Add a stimulus':false,
                                'Add an item':false,
                                'Stimulus settings':false,
                                'Item settings':false,
                                'Assign scoring':false,
                                'Preview in Delivery':false
                            })

    return (
        <div className='bb b--purple bw5'>
            <div className='mt2'>
                <div className='flex flex-row'>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool} setRibbonDisplayBool={setRibbonDisplayBool} tabText='Home' />
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Views' />
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Stimulus'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Add an item'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Images'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Item settings'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Find and replace'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Assign scoring'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Metadata'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Preview in Delivery'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Another tab'/>
                    <RibbonTabs ribbonDisplayBool={ribbonDisplayBool}  setRibbonDisplayBool={setRibbonDisplayBool} tabText='Another tab 2'/>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='bt bb mb0 ribbonInner shadow-1' style={{height: '72px'}}>
                    {ribbonDisplayBool['Home'] &&
                        <div style={{background:'#F0F0F0'}}>
                            <Home />
                        </div>}
                    {ribbonDisplayBool['Views'] &&
                        <div className='flex flex-row'>
                            <RibbonElements setView={setView} label='A4' />
                            <RibbonElements setView={setView} label='Web' />
                            <RibbonElements setView={setView} label='Stim only' />
                            <RibbonElements setView={setView} label='Stim + items' />
                            <RibbonElements setView={setView} label='Stim + items + metadata' />
                            <RibbonElements setView={()=>{}} label='' />
                            <RibbonElements setView={()=>{}} label='' />
                            <RibbonElements setView={()=>{}} label='' />
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Ribbon;