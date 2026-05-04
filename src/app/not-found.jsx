import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">

            <h1 className="text-9xl font-bold text-green-500">404</h1>

            <h2 className="text-2xl font-semibold mb-2">Oops! This page wandered off.</h2>
            <p className="text-gray-400 mb-8 max-w-md">
                Looks like this page got lost in the herd. The animal you're looking
                for might have been moved or doesn't exist.
            </p>

            <div className="flex gap-4">
                <Link href="/" className="btn btn-success">
                    Back to Home
                </Link>
            </div>

        </div>
    );
};

export default NotFound;