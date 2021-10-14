function Items(props){

    return (
        <div className='flex flex-column'>
            <div className='flex flex-column ma3 ml4'>
                <div className='moon-gray f6'>mcq - 1234</div>
                <div contenteditable='true' className='itemsAreaWeb ba b--dashed b--moon-gray dark-gray'>
                    <p className='ml3'>The man’s comment in line 4 is most likely delivered with</p>
                    <p className='ml4'><b>A.</b> fervour. </p>
                    <p className='ml4'><b>B.</b> hesitancy. </p>
                    <p className='ml4'><b>C.</b> bitterness. </p>
                    <p className='ml4'><b>D.</b> smugness. </p>
                </div>
            </div>
            <div className='flex flex-column ma4 ml4'>
                <div className='moon-gray f6'>mcq - 5678</div>
                <div contenteditable='true' className='itemsArea ba b--dashed b--moon-gray dark-gray'>
                    <p className='ml3'>Paul’s comment in line 6 is best described as an attempt to</p>
                    <p className='ml4'><b>A.</b> maintain civility. </p>
                    <p className='ml4'><b>B.</b> express his feelings.  </p>
                    <p className='ml4'><b>C.</b> demonstrate sympathy. </p>
                    <p className='ml4'><b>D.</b> redirect the conversation.</p>
                </div>
            </div>
        </div>
    )
}

export default Items