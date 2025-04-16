const App = () => {
    return <Parent user="John" />
};

const Parent = ({ user }) => {
    return <child user={user} />
}

const Child = ({ user }) => {
    return <div>{user}</div>
}

const GrandChild = ({ user }) => {
    return <div><h1>
        {user}
    </h1>  // props passes all the way down to the grandchild
    </div>
}

// =========================================================================================================


// Using Context API (Clean & Scalable):

const UserContext = React.createContext(); // Create a context
const App1 = () => {
    return (
        <UserContext.Provider value={"John"}> 
        <GrandChild />
        </UserContext.Provider>
       
    );
};

// 3. consume Context in the GrandChild component
const GrandChild1 = () => {
    const user = React.useContext(UserContext); // useContext hook to consume context
    return (
        <div><h1>
            {user}
        </h1>  // props passes all the way down to the grandchild
        </div>
    )
}