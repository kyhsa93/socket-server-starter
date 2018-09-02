mkdir test_lib
babel test -d test_lib
istanbul cover _mocha ./test_lib/
