import requests

url = "http://127.0.0.1:5002/api/create"

data = {
    "course_id": 123456,
    "course_title": "Test Course",
    "url": "https://example.com/test_course",
    "is_paid": True,
    "price": 50,
    "num_subscribers": 100,
    "num_reviews": 10,
    "num_lectures": 20,
    "level": "Beginner",
    "content_duration": 3,
    "published_timestamp": "2022-03-19T12:00:00.000+00:00",
    "subject": "Test Subject"
}

response = requests.post(url, json=data)

print(response.json())