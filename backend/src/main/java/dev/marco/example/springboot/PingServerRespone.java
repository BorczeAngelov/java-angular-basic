package dev.marco.example.springboot;

public class PingServerRespone {
    private String message;

    public PingServerRespone(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}