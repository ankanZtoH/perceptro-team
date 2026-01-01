#!/usr/bin/env python3
"""
File Content Replacer Script
Replace text patterns across all files in a directory.
"""

import os
import argparse
import sys
from pathlib import Path


def replace_in_file(file_path, matcher, replacer, dry_run=False):
    """
    Replace matcher with replacer in a single file.
    
    Returns:
        tuple: (bool: was_modified, int: replacement_count)
    """
    try:
        # Try to read as text file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except (UnicodeDecodeError, PermissionError) as e:
        # Skip binary files or files we can't read
        return False, 0
    
    # Check if matcher exists in content
    if matcher not in content:
        return False, 0
    
    # Count replacements
    replacement_count = content.count(matcher)
    
    # Perform replacement
    new_content = content.replace(matcher, replacer)
    
    # Write back if not dry run
    if not dry_run:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
        except PermissionError as e:
            print(f"  ⚠️  Permission denied: {file_path}")
            return False, 0
    
    return True, replacement_count


def process_directory(directory, matcher, replacer, dry_run=False):
    """
    Process all files in directory recursively.
    
    Returns:
        tuple: (files_processed, files_modified, total_replacements)
    """
    directory_path = Path(directory)
    
    if not directory_path.exists():
        print(f"❌ Error: Directory '{directory}' does not exist.")
        sys.exit(1)
    
    if not directory_path.is_dir():
        print(f"❌ Error: '{directory}' is not a directory.")
        sys.exit(1)
    
    files_processed = 0
    files_modified = 0
    total_replacements = 0
    modified_files = []
    
    print(f"\n{'🔍 DRY RUN MODE - No files will be modified' if dry_run else '🔧 Processing files...'}")
    print(f"Directory: {directory_path.absolute()}")
    print(f"Matcher: '{matcher}'")
    print(f"Replacer: '{replacer}'")
    print("-" * 60)
    
    # Walk through all files
    for root, dirs, files in os.walk(directory_path):
        for filename in files:
            file_path = Path(root) / filename
            files_processed += 1
            
            was_modified, count = replace_in_file(file_path, matcher, replacer, dry_run)
            
            if was_modified:
                files_modified += 1
                total_replacements += count
                relative_path = file_path.relative_to(directory_path)
                modified_files.append((relative_path, count))
                print(f"  ✓ {relative_path} ({count} replacement{'s' if count != 1 else ''})")
    
    # Print summary
    print("-" * 60)
    print(f"\n📊 Summary:")
    print(f"  Files processed: {files_processed}")
    print(f"  Files modified: {files_modified}")
    print(f"  Total replacements: {total_replacements}")
    
    if dry_run and files_modified > 0:
        print(f"\n💡 Run without --dry-run to apply changes")
    
    return files_processed, files_modified, total_replacements


def main():
    parser = argparse.ArgumentParser(
        description='Replace text patterns in all files within a directory.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s /path/to/dir
  %(prog)s /path/to/dir --matcher "/old/" --replacer "/new/"
  %(prog)s /path/to/dir --dry-run
        """
    )
    
    parser.add_argument(
        'directory',
        help='Directory to process'
    )
    
    parser.add_argument(
        '--matcher',
        default='/images/',
        help='String to find (default: /images/)'
    )
    
    parser.add_argument(
        '--replacer',
        default='/~perceptron/sponsorship/images/',
        help='String to replace with (default: /~perceptron/sponsorship/images/)'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Preview changes without modifying files'
    )
    
    args = parser.parse_args()
    
    # Process directory
    process_directory(args.directory, args.matcher, args.replacer, args.dry_run)


if __name__ == '__main__':
    main()