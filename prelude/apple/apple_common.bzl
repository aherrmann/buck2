# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# TODO(cjhopman): This was generated by scripts/hacks/rules_shim_with_docs.py,
# but should be manually edited going forward. There may be some errors in
# the generated docs, and so those should be verified to be accurate and
# well-formatted (and then delete this TODO)

load("@prelude//:is_full_meta_repo.bzl", "is_full_meta_repo")

def _headers_arg():
    return {
        "headers": attrs.named_set(attrs.source(), sorted = True, default = [], doc = """
    The set of header files that are made available for inclusion to the source files in this
     target. These should be specified as either a list of header files or a dictionary of header names
     to header files. The header names can contain forward slashes (`/`). If a list of
     header files is specified, the headers can be imported
     with `#import "$HEADER_PATH_PREFIX/$HEADER_NAME"` or `#import
     "$HEADER_NAME"`, where `$HEADER_PATH_PREFIX` is the value of
     the target's `header_path_prefix` attribute, and `$HEADER_NAME` is
     the filename of the header file. If a dictionary is specified, each header can be imported
     with `#import "$HEADER_NAME"`, where `$HEADER_NAME` is the key
     corresponding to this file. In this case, the `header_path_prefix` attribute is
     ignored. In either case, quotes in the import statements can be replaced with angle brackets.
"""),
    }

def _exported_headers_arg():
    return {
        "exported_headers": attrs.named_set(attrs.source(), sorted = True, default = [], doc = """
    The set of header files that are made available for inclusion to the source files in this
     target and all targets that transitively depend on this one. These should be specified as
     either a list of header files or a dictionary of header names
     to header files. The header names can contain forward slashes (`/`). If a list of
     header files is specified, the headers can be imported
     with `#import "$HEADER_PATH_PREFIX/$HEADER_NAME"` or, if a header file that belongs to
     the same rule is being imported, with `#import
     "$HEADER_NAME"`, where `$HEADER_PATH_PREFIX` is the value of
     the target's `header_path_prefix` attribute, and `$HEADER_NAME` is
     the filename of the header file. If a dictionary is specified, each header can be imported
     with `#import "$HEADER_NAME"`, where `$HEADER_NAME` is the key
     corresponding to this file. In this case, the `header_path_prefix` attribute is
     ignored. In either case, quotes in the import statements can be replaced with angle brackets.
"""),
    }

def _header_path_prefix_arg():
    return {
        "header_path_prefix": attrs.option(attrs.string(), default = None, doc = """
    A path prefix when including headers of this target. For example, headers from a library defined
     using

    ```
    apple_library(
        name = "Library",
        headers = glob(["**/*.h"]),
        header_path_prefix = "Lib",
    )
    ```

    can be imported using following mapping

    ```
    Library/SubDir/Header1.h -> Lib/Header1.h
    Library/Header2.h -> Lib/Header2.h
    ```

    Defaults to the short name of the target. Can contain forward slashes (`/`), but
     cannot start with one. See `headers` for more information.
"""),
    }

def _frameworks_arg():
    return {
        "frameworks": attrs.list(attrs.string(), default = [], doc = """
    A list of system frameworks that the code in this target uses. Each entry should be a path
     starting with `$SDKROOT` or `$PLATFORM_DIR` to denote that the rest of the
     path is relative to the root of the SDK used for the build or to the platform toolchain
     directory.
"""),
    }

def _target_sdk_version():
    return {
        "target_sdk_version": attrs.option(attrs.string(), default = None, doc = """
    The minimum OS version that the library target should support, overriding the minimum set in
     `.buckconfig`. When set, Buck will automatically add flags to both Objective-C and
     Swift compilation that will allow the use of the new APIs without guarding code inside availability
     checks.
"""),
    }

def _info_plist_arg():
    return {
        "info_plist": attrs.source(doc = """
    A path to an `Info.plist` file that will be placed in the bundle. The specified file
     will be processed by substituting variable names with their values
     (see `info_plist_substitutions` for more information).
"""),
    }

def _info_plist_substitutions_arg():
    return {
        "info_plist_substitutions": attrs.dict(key = attrs.string(), value = attrs.string(), sorted = False, default = {}, doc = """
    A dictionary that assigns variable names to their values. It is used for variable
     substitution when processing the file specified in `info_plist`. For example if this
     argument is set to `{\'VAR\': \'MyValue\'}`, then each occurrence of `$(VAR)` or `${VAR}` in the file will be replaced by `MyValue`.
"""),
    }

def _extra_xcode_sources():
    return {
        "extra_xcode_sources": attrs.list(attrs.source(), default = [], doc = """
    When the project is generated, this is the list of files that will added to the build phase
     "Compile Sources" of the given target.
"""),
    }

def _extra_xcode_files():
    return {
        "extra_xcode_files": attrs.list(attrs.source(), default = [], doc = """
    When the project is generated, this is the list of files that will added to the project.
     Those files won't be added to the build phase "Compile Sources".
"""),
    }

def _privacy_manifest_arg():
    return {
        "privacy_manifest": attrs.option(attrs.source(), default = None, doc = """
    A path to an `.xcprivacy` file that will be placed in the bundle.
"""),
    }

def _debug_artifacts_validators_arg():
    return {
        "debug_artifacts_validators": attrs.dict(
            attrs.string(),
            attrs.tuple(
                # A target which will be passed two named arguments:
                # --artifacts: A path to a file containing a list of artifact paths to inspect.
                # --output: The path to write the analysis output to.
                attrs.exec_dep(providers = [RunInfo]),
                # A target which is passed the outputs of the previous script
                # and emits a ValidationSpec validation_result JSON file.
                # --analysis-json-path: A path to a JSON artifact. Keys are the configured target.
                # --output: The path to write the ValidationSpec validation_result JSON file.
                # value is a list of artifact outputs from the previous script.
                attrs.exec_dep(providers = [RunInfo]),
            ),
            default = {},
        ),
    }

def _serialize_debugging_options_arg():
    return {
        # Need ability to distinguish between no value provided by users
        # vs value explicitly set to `True` (in the latter case, we should
        # show warning if value cannot be respected in mixed modules while
        # in the former, we do not show a warning).
        #
        # Lack of value defaults to enabling serialized debugging options.
        "serialize_debugging_options": attrs.option(attrs.bool(), default = None),
    }

def _uses_explicit_modules_arg():
    return {
        "uses_explicit_modules": attrs.bool(default = False),
    }

def _meta_apple_library_validation_enabled_default_value():
    if not is_full_meta_repo():
        return False

    meta_apple_library_validation_enabled_default = (read_root_config("apple", "meta_apple_library_validation", "false").lower() == "true")
    return select({
        "DEFAULT": select({
            "DEFAULT": meta_apple_library_validation_enabled_default,
            "config//features/apple:fb_xplat_suffixing_check_disabled": False,
            "config//features/apple:fb_xplat_suffixing_check_enabled": True,
        }),
        # arvr targets do not use suffixed targets, as any xplat target deps
        # get rewritten without the Apple-specific suffixes.
        "config//build_mode/constraints:arvr_mode_enabled": False,
    })

def _meta_apple_library_validation_enabled_arg():
    return {
        "_meta_apple_library_validation_enabled": attrs.bool(default = _meta_apple_library_validation_enabled_default_value()),
    }

def _skip_universal_resource_dedupe_default_value():
    if not is_full_meta_repo():
        return False

    return select({
        "DEFAULT": False,
        "config//features/apple:skip_universal_resource_dedupe_disabled": False,
        "config//features/apple:skip_universal_resource_dedupe_enabled": True,
    })

def _skip_universal_resource_dedupe_arg():
    return {
        "skip_universal_resource_dedupe": attrs.bool(default = _skip_universal_resource_dedupe_default_value()),
    }

def _apple_sanitizer_compatibility_arg():
    if not is_full_meta_repo():
        return {}

    return {
        "_sanitizer_compatibility": attrs.default_only(attrs.dep(default = "fbsource//tools/build_defs/apple/sanitizers:sanitizer_compatibility")),
    }

apple_common = struct(
    headers_arg = _headers_arg,
    exported_headers_arg = _exported_headers_arg,
    header_path_prefix_arg = _header_path_prefix_arg,
    frameworks_arg = _frameworks_arg,
    target_sdk_version = _target_sdk_version,
    info_plist_arg = _info_plist_arg,
    info_plist_substitutions_arg = _info_plist_substitutions_arg,
    extra_xcode_sources = _extra_xcode_sources,
    extra_xcode_files = _extra_xcode_files,
    privacy_manifest_arg = _privacy_manifest_arg,
    debug_artifacts_validators_arg = _debug_artifacts_validators_arg,
    serialize_debugging_options_arg = _serialize_debugging_options_arg,
    uses_explicit_modules_arg = _uses_explicit_modules_arg,
    meta_apple_library_validation_enabled_arg = _meta_apple_library_validation_enabled_arg,
    skip_universal_resource_dedupe_arg = _skip_universal_resource_dedupe_arg,
    apple_sanitizer_compatibility_arg = _apple_sanitizer_compatibility_arg,
)
