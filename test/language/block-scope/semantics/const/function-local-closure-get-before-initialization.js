// Copyright (C) Copyright 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    const: function local closure [[Get]] before initialization.
    (TDZ, Temporal Dead Zone)
negative: ReferenceError
---*/
(function() {
  function f() { return x + 1; }
  f();
  const x = 1;
}());
