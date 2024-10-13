from fastapi import FastAPI, HTTPException
import os
import google.generativeai as genai
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn 
from pydantic import BaseModel
from dotenv import load_dotenv
load_dotenv()
key = os.getenv("GENAI_API_KEY")

app = FastAPI()
origins = [
    "http://192.168.1.102:3000 ",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    prom: str

@app.post("/post")
async def create_item(prompt: Prompt):
    try:

        genai.configure(api_key=key)
        # Create the model
        generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
        }
        
        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            generation_config=generation_config,
        )
        chat_session = model.start_chat(
        history=[]
        )
        response = chat_session.send_message(prompt.prom).text
        return {"answer": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
    
