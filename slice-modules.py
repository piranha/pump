#!/usr/bin/env python

import sys, re, os, os.path


TARGET_RE = re.compile('goog.provide\("(.*)"\)')


def main(out):
    target = None

    if not os.path.exists(out):
        os.makedirs(out)

    for line in sys.stdin.readlines():
        m = TARGET_RE.search(line)
        if m:
            path = os.path.join(out, m.group(1) + '.js')
            print path
            target = open(path, 'w')
        target.write(line)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print 'Usage: %s output/dir' % sys.argv[0]
        sys.exit(0)
    main(sys.argv[1])
