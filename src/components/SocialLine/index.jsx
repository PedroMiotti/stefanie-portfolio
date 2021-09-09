import './style.css';

// Assets

const SocialLine = () => {
    return (
        <div className="social-line-container">
            <div className="linkedin-icon-container">
                <a href="https://www.linkedin.com/in/stefanie-hemmann-272114159/"  target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-linkedin"><title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
                </a>
            </div>
        </div>
    );
};

export default SocialLine;