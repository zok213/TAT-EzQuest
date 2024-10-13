FROM python:3.11.5-slim-bookworm

ENV CLOUD_HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH

RUN apt-get update -y && \
    apt-get install -y libgl1-mesa-glx ffmpeg libsm6 libxext6

RUN useradd -m -u 1000 user

WORKDIR $CLOUD_HOME/app

USER user

COPY --chown=user:user ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --user -r /app/requirements.txt

COPY --chown=user:user . $CLOUD_HOME/app

EXPOSE 7860/tcp 7860/udp

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
