import react from 'react';

const Sidebar = (props)=>{
    return (
        <>
        <div id="left" className='container col-sm-10 mt-5'>
          <p>{props.name1}{props.props1}</p>
          <p>{props.name2}{props.props2}{props.unit}</p>
          <p>{props.name3}{props.props3}{props.unit}{props.name4}</p>
          <p>{props.name5}{props.props4}{props.name6}{props.props5}</p>
        </div>
        </>
    );
}

export default Sidebar;