/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

pub mod configured;
pub mod configured_node_visit_all_deps;
pub mod configured_ref;
pub mod eval_result;
pub mod frontend;
pub mod targets_map;
pub mod unconfigured;

/// Attributes on target nodes that are generated by buck, not provided by users.
pub mod attributes {
    /// The nodes that this node depends on.
    pub static DEPS: &str = "buck.deps";

    /// The oncall for this node.
    pub static ONCALL: &str = "buck.oncall";

    /// The package or the buildfile path.
    /// The package in `targets` command, but the buildfile path in `*query` commands.
    pub static PACKAGE: &str = "buck.package";

    /// A string representation of the target's rule type.
    pub static TYPE: &str = "buck.type";

    /// The target hash of this target.
    pub static TARGET_HASH: &str = "buck.target_hash";

    /// The callstack for this target.
    pub static TARGET_CALL_STACK: &str = "buck.target_call_stack";

    /// The configuration deps, deps that appear as conditions in selects.
    pub static CONFIGURATION_DEPS: &str = "buck.configuration_deps";

    /// The resolved execution platform for this node.
    pub static EXECUTION_PLATFORM: &str = "buck.execution_platform";

    /// The resolved target configuration for this node.
    pub static TARGET_CONFIGURATION: &str = "buck.target_configuration";

    /// The input source files/directories that this node uses.
    pub static INPUTS: &str = "buck.inputs";
}
