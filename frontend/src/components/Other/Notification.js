const Notification = ({error, success, info}) => {
    if(error != null){
        return(
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <button type="button" className="close" data-bs-dismiss="alert">&times;</button>
                <strong> {error}!</strong>
            </div>
        );
    }
    if(success != null){
        return(
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <button type="button" className="close" data-bs-dismiss="alert">&times;</button>
                <strong> {success}!</strong>
            </div>
        );
    }
    if(info != null){
        return(
            <div className="alert alert-info alert-dismissible fade show" role="alert">
                <button type="button" className="close" data-bs-dismiss="alert">&times;</button>
                <strong> {info}!</strong>
            </div>
        );
    }
};


export default Notification;