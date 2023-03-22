import FetchJokeButton from "@/components/FetchJokeButton";
import RevealJokeButton from "@/components/RevealJokeButton";
import {useState} from "react";

export default function Home() {
    const [setup, setSetup] = useState("Why do python programmers wear glasses?");
    const [delivery, setDelivery] = useState("Because they can't C.");

    return (
        <div className={"min-h-screen flex flex-col items-center justify-center text-center"}>
            <h1 className={"font-bold text-3xl"}>SSE React Workshop</h1>
            <div className={"mt-6"}>
                <p>
                    <span className={"font-bold"}>
                        Setup: {" "}
                    </span>
                    {setup}
                </p>
                <p>
                    <span className={"font-bold"}>
                        Delivery: {" "}
                    </span>
                    {delivery}
                </p>
            </div>
            <div className={"space-x-6 mt-6"}>
                <FetchJokeButton/>
                <RevealJokeButton/>
            </div>
        </div>
    )
}
