import random


class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

class BinarySearchTree:
    def __init__(self):
        self.root = None
        self.nums = []

    def insert(self, key):
        self.nums.append(key)
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert(self.root, key)

    def _insert(self, root, key):
        
        if key < root.value:
            if root.left is None:
                root.left = Node(key)
            else:
                self._insert(root.left, key)
        else:
            if root.right is None:
                root.right = Node(key)
            else:
                self._insert(root.right, key)

    def search(self, key):
        return self._search(self.root, key)

    def _search(self, root, key):
        if root is None or root.value == key:
            return root
        if key < root.value:
            return self._search(root.left, key)
        return self._search(root.right, key)

    def inorder(self):
        return self._inorder(self.root, [])

    def _inorder(self, root, elements):
        if root:
            self._inorder(root.left, elements)
            elements.append(root.value)
            self._inorder(root.right, elements)
        return elements
    def preorder(self):
        return self._preorder(self.root, [])

    def _preorder(self, root, elements):
        if root:
            elements.append(root.value)
            self._preorder(root.left, elements)
            self._preorder(root.right, elements)
        return elements

    def postorder(self):
        return self._postorder(self.root, [])

    def _postorder(self, root, elements):
        if root:
            self._postorder(root.left, elements)
            self._postorder(root.right, elements)
            elements.append(root.value)
        return elements

# Example usage
if __name__ == "__main__":
    bst = BinarySearchTree()
    # bst.insert(5)
    # bst.insert(3)
    # bst.insert(7)
    # bst.insert(2)
    # bst.insert(4)
    # bst.insert(6)
    # bst.insert(8)
    # bst.insert(10)
    for i in range(10):
        bst.insert(random.randint(0, 20))

    print("original:", bst.nums)
    print("In-order traversal:", bst.inorder())
    print("Search for 5:", bst.search(5))
    print(f"Search for {bst.nums[5]}:", bst.search(bst.nums[5]))
