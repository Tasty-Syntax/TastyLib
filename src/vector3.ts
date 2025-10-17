/**
 * Custom Vector3 implemention for Vector calculations
 * @author TastySyntax
 */
export class Vector3 {
  constructor(private _x: number, private _y: number, private _z: number) { }

  /**
  * Get x value from vector
  */
  get x() {
    return this._x;
  }

  /**
  * Get y value from vector
  */
  get y() {
    return this._y;
  }

  /**
  * Get z value from vector
  */
  get z() {
    return this._z;
  }

  /**
  * Create Vector3 with all values set to 0
  * @returns Vector3
  */
  static zero() {
    return new Vector3(0, 0, 0);
  }

  /**
  * Create Vector3 with all values set to 1
  * @returns Vector3
  */
  static one() {
    return new Vector3(1, 1, 1);
  }

  /**
  * Returns resulting Vector of the substraction 
  * @param v1 Start vector
  * @param v2 End vector
  * @returns Vector3
  */
  static subtract(v1: Vector3, v2: Vector3) {
    return new Vector3(v1.x - v2.x, v2.y - v2.y, v1.z - v2.z);
  }

  /**
  * Returns resulting Vector of the addition 
  * @param v1 Start vector
  * @param v2 End vector
  * @returns Vector3
  */
  static add(v1: Vector3, v2: Vector3) {
    return new Vector3(v1.x + v2.x, v2.y + v2.y, v1.z + v2.z);
  }

  /**
  * Returns dot product of two vectors 
  * @param v1 Start vector
  * @param v2 End vector
  * @returns Vector3
  */
  static dot(v1: Vector3, v2: Vector3) {
    return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
  }

  /**
  * Clones the Vector instance
  * @returns Vector3
  */
  clone() {
    return new Vector3(this._x, this._y, this._z);
  }

  /**
  * Returns a normalized version of the vector
  * @returns Vector3
  */
  toNormalized() {
    const magnitude = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (magnitude === 0) {
      console.warn("Cannot normalize a zero vector.");
      return Vector3.zero();
    }

    return new Vector3(this.x / magnitude, this.y / magnitude, this.z / magnitude)
  }

  /**
  * Converts the vector into BF6 Portal Vector 
  * @returns mod.Vector
  */
  toModVector(invertParameters = false): mod.Vector {
    if (invertParameters) {
      return mod.CreateVector(this._x * -1, this._y * -1, this._z * -1);
    } else {
      return mod.CreateVector(this._x, this._y, this._z);
    }
  }
}
