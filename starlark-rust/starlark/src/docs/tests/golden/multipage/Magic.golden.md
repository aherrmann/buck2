# @generated
# To regenerate, run:
# ```
# STARLARK_RUST_REGENERATE_GOLDEN_TESTS=1 cargo test -p starlark --lib
# ```

# Magic

```python
def Magic(a1: int, a2: int = ..., step: int = 1, /) -> str
```

A function with only positional arguments.

And a slightly longer description. With some example code:

```python
Magic(1)
```

And some assertions:

```rust
1 == 1
```