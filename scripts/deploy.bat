@echo off
echo ========================
echo ========================
echo === Building Next.js ===
echo ========================
echo ========================

call pnpm build

echo =============================
echo =============================
echo === Running fix-prefix #1 ===
echo =============================
echo =============================
call python ./scripts/fix-prefix.py ./dist --matcher "/assets/" --replacer "/~perceptron/teams/assets/"

echo =============================
echo =============================
echo === Running fix-prefix #2 ===
echo =============================
echo =============================
call python ./scripts/fix-prefix.py ./dist --matcher "/~perceptron/~perceptron/" --replacer "/~perceptron/"

echo =========================
echo =========================
echo === Uploading via SCP ===
echo =========================
echo =========================
scp -r -P 4400 ./dist/* sysadm@ssh.rkmvu.ac.in:~/builds/perceptron/teams

echo =============
echo =============
echo === DONE! ===
echo =============
echo =============
pause
