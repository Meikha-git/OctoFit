from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        self.user1 = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)
        self.user2 = User.objects.create(name='Batman', email='batman@dc.com', team=dc)

    def test_user_team(self):
        self.assertEqual(self.user1.team.name, 'Marvel')
        self.assertEqual(self.user2.team.name, 'DC')

    def test_activity_creation(self):
        activity = Activity.objects.create(user=self.user1, type='Running', duration=30)
        self.assertEqual(activity.user.name, 'Spider-Man')
        self.assertEqual(activity.type, 'Running')

    def test_leaderboard(self):
        marvel = Team.objects.get(name='Marvel')
        lb = Leaderboard.objects.create(team=marvel, points=100)
        self.assertEqual(lb.team.name, 'Marvel')
        self.assertEqual(lb.points, 100)

    def test_workout(self):
        workout = Workout.objects.create(name='Cardio Blast', description='High intensity')
        self.assertEqual(workout.name, 'Cardio Blast')