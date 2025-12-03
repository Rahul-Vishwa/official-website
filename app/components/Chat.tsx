"use client";
import { useState } from "react";
import AutoResizeTextarea from "../shared/AutoResizeTextarea";

export default function Chat() {
    const [text, setText] = useState("");
    const [chat, setChat] = useState<{ id: number, isAgent: boolean, text: string }[]>([
        { id: 1, isAgent: false, text: "Can you analyze this sales report?" },
        { id: 2, isAgent: true, text: "Sure. Upload it and I’ll summarize the key insights." },
        { id: 3, isAgent: false, text: "Uploaded. What’s the main takeaway?" },
        { id: 4, isAgent: true, text: "Revenue is up 12% this month and customer churn is slightly lower." },
        { id: 5, isAgent: false, text: "Can you also generate a brief report?" },
        { id: 6, isAgent: true, text: "Done. I’ve created a concise summary you can download." }
    ]);

    return (
        <div className="">
            <div className=" h-[470px] flex flex-col w-full rounded-xl overflow-hidden bg-black border-2 border-gray-400">
                <div className="flex gap-2 px-4 py-2 border-b border-neutral-700">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fe5f57" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffbc2e" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#27c93f" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                </div>
                <div className="relative h-full flex flex-col justify-center text-white px-20 py-8">
                    <div className="gap-5 flex flex-col flex-1">
                        {chat.map(message => {
                            return <div key={message.id} className="">
                                <div
                                    className={(message.isAgent ? "" : "bg-neutral-600 float-right px-4 py-2 rounded-md") +
                                        ` inline-block text-wrap`}>
                                    {message.text}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="relative">
                        <AutoResizeTextarea
                            value={text}
                            onChange={(e: any) => setText(e.target.value)}
                            maxLength={200}
                            placeholder="Type something..."
                            className="w-full border border-gray-600 shadow-sm shadow-gray-800 
                            text-[15px] py-3 px-5 outline-none 
                            active:outline-none rounded-md resize-none max-h-40 overflow-y-auto no-scrollbar"
                            rows={1}>
                        </AutoResizeTextarea>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer absolute bottom-5 right-5 rotate-45" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}