import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

# Step 1: Data Preprocessing
data = pd.read_csv('/Users/praveendesilva/PycharmProjects/eduvista/udemy_courses.csv')  # Load dataset
# Handle missing values if any
data.fillna(0, inplace=True)  # Replace NaNs with 0 for simplicity
# Encode categorical variables
data['level'] = pd.Categorical(data['level']).codes
data['subject'] = pd.Categorical(data['subject']).codes

# Mapping of subject codes to names
subject_map = {
    0: 'Web Development',
    1: 'Graphic Design',
    2: 'Musical Instruments',
    3: 'Business'
}

# Step 2: Feature Selection
features = ['level', 'subject', 'num_reviews', 'num_subscribers']  # Include 'num_subscribers' for popularity
X = data[features]
# Normalize numerical features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 3: Clustering
# Determine the optimal number of clusters
# Example using the elbow method
scores = []
for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    scores.append(silhouette_score(X_scaled, kmeans.labels_))
optimal_k = scores.index(max(scores)) + 2  # Add 2 to get the optimal k

# Apply K-Means clustering with the optimal number of clusters
kmeans = KMeans(n_clusters=optimal_k, random_state=42)
kmeans.fit(X_scaled)
data['cluster'] = kmeans.labels_

# Step 4: Recommendation
def recommend_courses(student_answers):
    # Convert student's answers into DataFrame
    student_courses = pd.DataFrame([student_answers], columns=['level', 'subject', 'num_reviews', 'num_subscribers'])
    # Find the cluster of student's preferences
    student_cluster = kmeans.predict(scaler.transform(student_courses))
    # Get subject name based on user's choice
    subject_name = subject_map[student_answers[1]]
    # Filter courses by subject chosen by the student
    subject_courses = data[data['subject'] == student_answers[1]]
    # Filter courses by preferred difficulty level
    if student_answers[0] == 3:  # All Levels
        level_courses = subject_courses
    else:
        level_courses = subject_courses[subject_courses['level'] == student_answers[0]]
    # Filter courses by number of reviews based on user's choice
    # Highly Rated: >= 1000 reviews, Moderately Rated: >= 500 reviews, Low Rated: < 500 reviews
    if student_answers[2] == 1:  # Highly Rated
        level_courses = level_courses[level_courses['num_reviews'] >= 1000]  # Example threshold for highly rated
    elif student_answers[2] == 2:  # Moderately Rated
        level_courses = level_courses[level_courses['num_reviews'] >= 500]   # Example threshold for moderately rated
    else:  # Low Rated
        level_courses = level_courses[level_courses['num_reviews'] < 500]    # Example threshold for low rated
    # Get recommended courses within the same cluster, subject, and level, sorted by popularity (num_subscribers)
    recommended_courses = level_courses[level_courses['cluster'] == student_cluster[0]].sort_values(by='num_subscribers', ascending=False)
    # Optionally, fine-tune recommendations based on quiz marks or other factors
    return recommended_courses[['course_title', 'level', 'subject', 'num_reviews', 'num_subscribers']]  # Include course title in output

# Questions to gather student preferences
def ask_questions():
    print("Welcome! Let's find the best courses for you.")
    print("1. What subject are you interested in?")
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

    print("2. What is your preferred difficulty level for courses?")
    for code, level in enumerate(['Beginner', 'Intermediate', 'Advanced', 'All Levels']):
        print(f"   - {code}: {level}")
    while True:
        try:
            level = int(input("Your choice: "))
            if level not in [0, 1, 2, 3]:
                raise ValueError
            break
        except ValueError:
            print("Please enter a valid choice (0, 1, 2, or 3)")

    print("3. How would you like to filter the ratings of existing courses?")
    print("   - 1: Highly Rated (>= 1000 reviews)")
    print("   - 2: Moderately Rated (>= 500 reviews)")
    print("   - 3: Low Rated (< 500 reviews)")
    while True:
        try:
            num_reviews = int(input("Your choice: "))
            if num_reviews not in [1, 2, 3]:
                raise ValueError
            break
        except ValueError:
            print("Please enter a valid choice (1, 2, or 3)")

    return [level, subject_choice, num_reviews, 0]  # Default value for 'num_subscribers'

# Example usage
def main():
    student_answers = ask_questions()
    recommended_courses = recommend_courses(student_answers)
    print("\nRecommended courses:")
    if recommended_courses.empty:
        print("No courses match your criteria.")
    else:
        print(recommended_courses)

if __name__ == "__main__":
    main()
