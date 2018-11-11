def solve(a1, b1, c1, a2, b2, c2):
    result = ""

    det = a1*b2 - a2*b1
    det_x = c1*b2 - c2*b1
    det_y = a1*c2 - a2*c1

    if not det == 0:
        x = det_x / det
        y = det_y / det
        result = "He co nghiem duy nhat " + "x = " + str(x) + ", y = " + str(y)
    elif det_x == 0:
        result = "He co vo so nghiem"
    else:
        result = "He vo nghiem"

    return result
