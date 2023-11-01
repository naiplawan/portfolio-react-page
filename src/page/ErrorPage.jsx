import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-100">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to="/">
                        <Button 
                        shape = "round"
                        type = "text"
                        size='large'
                        >Back Home</Button>
                    </Link>
                }
            />
        </div>
    );
}
