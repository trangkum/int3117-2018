import unittest
import crame_method

class TestCrameMethod(unittest.TestCase):
    def test_path1(self):
        self.assertEqual(crame_method.solve(1, 1, 5, 1, -1, 1), "He co nghiem duy nhat x = 3, y = 2")

    def test_path2(self):
        self.assertEqual(crame_method.solve(1, 1, 5, 2, 2, 10), "He co vo so nghiem")

    def test_path3(self):
        self.assertEqual(crame_method.solve((1, 1, 5, 1, 1, 10), "He vo nghiem"))
