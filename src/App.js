import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./components/data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm"

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you Sure You want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                    handleDelete={deleteFeedback} />
            </div>
        </>
    )
}
export default App