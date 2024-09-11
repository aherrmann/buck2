# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


import json

from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.buck_workspace import buck_test

# Test `cfg_constructors` end to end. This is useful for testing the core + starlark
# implementation so that we know we don't break anything in the repo. For testing
# specific cfg constructor logic, use bxl_test to unit test the cfg constructor instead


@buck_test(inplace=True)
async def test_cfg_constructor_without_modifiers_returns_same_configuration(
    buck: Buck,
) -> None:
    result = await buck.cquery(
        "fbcode//buck2/tests/e2e/configurations/cfg_constructor/test_clear_package_modifiers_data/test_cfg_constructor_data:no_modifiers",
        "-A",
    )
    result = json.loads(result.stdout)
    assert len(result) == 1
    _test_target, test_target_attrs = list(result.items())[0]
    assert test_target_attrs["buck.target_configuration"].startswith(
        "ovr_config//platform:base"
    )


@buck_test(inplace=True)
async def test_cfg_constructor_with_target_modifiers(buck: Buck) -> None:
    result = await buck.cquery(
        "fbcode//buck2/tests/e2e/configurations/cfg_constructor/test_clear_package_modifiers_data/test_cfg_constructor_data:has_target_modifier",
        "-A",
    )
    result = json.loads(result.stdout)
    assert len(result) == 1
    _test_target, test_target_attrs = list(result.items())[0]
    assert test_target_attrs["buck.target_configuration"].startswith("cfg:linux")