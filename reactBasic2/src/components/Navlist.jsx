const Navlist = (props) => {
    const {data, handleRedirect} = props;
    return (
        <div className='List'>
           {data.map((item) => (
            <a onClick={() => handleRedirect(item)}>{item} </a>
           ))}
        </div>
    );
};

export default Navlist;

//cara 1 langsung proops
// const Navlist = (props) => {
    
//     return (
//         <div className='navbar-list'>
//             <a>{props?.data[0]}</a>
//             <a>{props?.data[1]}</a>
//             <a>{props?.data[2]}</a>
//         </div>
//     );
// };

//cara 2 destructure dalam param
// const Navlist = ({data}) => {
//     return (
//         <div className='navbar-list'>
//             <a>{data[0]}</a>
//             <a>{data[1]}</a>
//             <a>{data[2]}</a>
//         </div>
//     );
// };


//cara 3 seperti di atass