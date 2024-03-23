import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

#Data Preprocessing
data = pd.read_csv('/Users/praveendesilva/PycharmProjects/eduvista/udemy_courses.csv') 

data.fillna(0, inplace=True) 

data['level'] = pd.Categorical(data['level']).codes
data['subject'] = pd.Categorical(data['subject']).codes

subject_map = {
    0: 'Web Development',
    1: 'Graphic Design',
    2: 'Musical Instruments',
    3: 'Business'
}


features = ['level', 'subject', 'num_reviews', 'num_subscribers']  
X = data[features]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

#Clustering

scores = []
for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    scores.append(silhouette_score(X_scaled, kmeans.labels_))
optimal_k = scores.index(max(scores)) + 2 


kmeans = KMeans(n_clusters=optimal_k, random_state=42)
kmeans.fit(X_scaled)
data['cluster'] = kmeans.labels_

#  Recommendation
def recommend_courses(student_answers):
    # Convert student's answers into DataFrame
    student_courses = pd.DataFrame([student_answers], columns=['level', 'subject', 'num_reviews', 'num_subscribers'])

    student_cluster = kmeans.predict(scaler.transform(student_courses))

    subject_name = subject_map[student_answers[1]]

    subject_courses = data[data['subject'] == student_answers[1]]

    level_courses = subject_courses[subject_courses['level'] == student_answers[0]]

    if student_answers[2] == 2:
        level_courses = level_courses.sort_values(by='num_reviews', ascending=False)

    recommended_courses = level_courses[level_courses['cluster'] == student_cluster[0]].sort_values(by='num_subscribers', ascending=False)

    return recommended_courses[['course_title', 'level', 'subject', 'num_reviews', 'num_subscribers']] 


def ask_questions():
    print("Welcome! Let's find the best courses for you.")
    while True:
        try:
            level = int(input("1. What is your preferred difficulty level for courses?\n   - 0: Beginner\n   - 1: Intermediate\n   - 2: Advanced\nYour choice: "))
            if level not in [0, 1, 2]:
                raise ValueError
            break
        except ValueError:
            print("Please enter a valid choice (0, 1, or 2)")

    print("2. What subject are you interested in?")
    for code, subject in subject_map.items():
        print(f"   - {code}: {subject}")
    while True:
        try:
            subject_choice = int(input("Your choice: "))
            if subject_choice not in subject_map.keys():
                raise ValueError
            break
        except ValueError:
            print("Please enter a valid choice")

    while True:
        try:
            num_reviews = int(input("3. How important is the number of reviews when choosing a course?\n   - 0: Not important\n   - 1: Somewhat important\n   - 2: Very important\nYour choice: "))
            if num_reviews not in [0, 1, 2]:
                raise ValueError
            break
        except ValueError:
            print("Please enter a valid choice (0, 1, or 2)")

    return [level, subject_choice, num_reviews, 0]  


if __name__ == "__main__":
    main()
